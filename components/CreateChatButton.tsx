"use client";
import React from "react";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateChatButton = () => {
  const router = useRouter();
  const createNewChat = () => {
    router.push("/chat/abcd");
  };
  return (
    <Button variant={"ghost"} onClick={createNewChat}>
      <MessageSquarePlusIcon />
    </Button>
  );
};

export default CreateChatButton;
