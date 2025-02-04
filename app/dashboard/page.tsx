import { getServerSession } from "next-auth";// Ensure correct import path
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { SignOutButton } from "@/components/buttons";
import { ProfileForm } from "./ProfileForm";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    console.log('Session: ', session);
    console.log("Session user email:", session?.user?.email);

    if (!session) {
        redirect('/api/auth/signin');
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user?.email!},
    });

    if (!user) {
        return (
            <>
                <h1>Dashboard</h1>
                <SignOutButton />
                <p>User not found</p>
            </>
        );
    }

    return (
        <>
            <h1>Dashboard</h1>
            <SignOutButton />
            <ProfileForm user={user} />
        </>
    );
}
