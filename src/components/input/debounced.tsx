"use client";

import type {
  ChangeEventHandler,
  ComponentPropsWithRef,
  ElementRef,
} from "react";

import { Input } from "@/components/input";

import { useDebouncedCallback } from "@/hooks/debounce";

export type DebouncedSearchInputProps = ComponentPropsWithRef<typeof Input>;

export const DebouncedSearchInput = (props: DebouncedSearchInputProps) => {
  const debounceFormSubmission = useDebouncedCallback<
    ChangeEventHandler<ElementRef<typeof Input>>
  >((event) => {
    const value = event.target.value;

    if (!value || value.length < 3) return;

    event.target.form?.requestSubmit();
  }, 300);

  return <Input onChange={debounceFormSubmission} {...props} />;
};
