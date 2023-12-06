import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import React from "react";

interface CardProps {
  title: string;
  price: string;
  subtitle?: string;
  ctaText: string;
}

const Card = ({ title, subtitle, price, ctaText }: CardProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-[#EAECF0] p-6">
      <div className="flex items-center gap-x-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/finance-avatar.svg" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-[#101828]">{title}</h3>
          <div className="flex flex-col text-sm font-normal text-[#475467] md:flex-row md:items-center">
            {subtitle && (
              <>
                <p>{subtitle}</p>
                <span className="hidden md:block">﹒</span>
              </>
            )}
            <p>${price}</p>
          </div>
        </div>
      </div>
      <Button variant={"outlined"} size={"sm"} className="text-sm">
        {ctaText}
      </Button>
    </div>
  );
};

export default Card;
