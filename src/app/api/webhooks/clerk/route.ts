import { Webhook } from "svix";
import { headers } from "next/headers";
import { type WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return new Response("Error occured", {
      status: 400,
    });
  }

  if (evt.type !== "user.created") return new Response("Incorrect event type", { status: 400 });

  try {
    const { email_addresses, id, username, image_url } = evt.data;

    const account = await prisma?.account.create({
      data: {
        email: email_addresses[0].email_address,
        clerkId: id,
        avatar: image_url,
      },
    });

    const name = username ? username.charAt(0).toUpperCase() + username.slice(1) : "";

    await prisma?.company.create({
      data: {
        name,
        accountId: account?.id,
      },
    });

    return new Response("", { status: 200 });
  } catch (err) {
    return new Response("Error occured", {
      status: 400,
    });
  }
}
