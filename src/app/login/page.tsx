import { AuthCard } from "../../components/auth-card";
import { AuthLayout } from "../../components/auth-layout";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ notice?: string }>;
}) {
  const noticeType = (await searchParams).notice;
  const notice =
    noticeType === "password-changed"
      ? "Your password has been changed successfully. Sign in with your new password."
      : noticeType === "inactive"
        ? "You were signed out after a period of inactivity."
        : undefined;
  return (
    <AuthLayout>
      <AuthCard notice={notice} />
    </AuthLayout>
  );
}
