"use client";

import { useToast } from "@/hooks";
import { submitComment } from "@/services";
import { useEffect, useRef, useState } from "react";

const CommentsForm = ({ slug }: { slug: string }) => {
  const { toast } = useToast();

  const commentRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const storeDataRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    const storedName = window.localStorage.getItem("name");
    const storedEmail = window.localStorage.getItem("email");

    if (nameRef.current && storedName) {
      nameRef.current.value = storedName;
    }

    if (emailRef.current && storedEmail) {
      emailRef.current.value = storedEmail;
    }
  }, []);

  const handleSubmit = async () => {
    setError(false);

    // Ensure all refs exist before accessing them
    if (
      !commentRef.current?.value ||
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !storeDataRef.current?.value
    ) {
      setError(true);
      return;
    }

    const { value: comment } = commentRef.current;
    const { value: name } = nameRef.current;
    const { value: email } = emailRef.current;
    const { checked: storeData } = storeDataRef.current;

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    try {
      const response = await submitComment(commentObj);

      if (response.error) {
        toast({
          title: "Submission Failed",
          description: response.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Comment submitted successfully!",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="shadow-lg rounded-lg pb-12 mb-8 p-4">
      <h3 className="text-xl font-semibold mb-8 border-b pb-4 ">
        Leave a comment
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentRef}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameRef}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />

        <input
          type="text"
          ref={emailRef}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataRef}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-500 cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Save my email and name for the next time I comment.
          </label>
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}

      <div className="mt-8">
        <button
          type="button"
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg roundef-full text-white px-8 py-3 cursor-pointer"
          onClick={handleSubmit}
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsForm;
