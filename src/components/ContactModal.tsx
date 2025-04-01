"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <Dialog.Root>
      {/* Trigger Button - Keep your original style */}
      <Dialog.Trigger asChild>
        <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-white/70 hover:text-gray-900 transition duration-300">
          <span className="font-semibold">Contact Me</span>
          <ArrowUpRightIcon className="size-4" />
        </button>
      </Dialog.Trigger>

      {/* Modal Content */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-gray-800 rounded-xl border border-white/15">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="font-serif text-xl text-white">
              Let&apos;s Work Together
            </Dialog.Title>
            <Dialog.Close className="text-white/50 hover:text-white">
              <Cross2Icon className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-white/20"
              required
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-white/20"
              required
            />
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-white/20"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-emerald-400 text-gray-900 rounded-lg font-semibold hover:bg-emerald-300 transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
