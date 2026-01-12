import { submitName, getName } from "@/lib/rest/customName";

export async function POST(req) {
  try {
    const { name } = await req.json();
    const data = await submitName(name);
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: true, message: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await getName();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: true, message: error.message },
      { status: 500 }
    );
  }
}
