import { getComments } from "@/services";
import { CommentNode } from "@/types";
import { formatDate } from "@/utils";
import parse from "html-react-parser";

const Comments = async ({ slug }: { slug: string }) => {
  const comments: CommentNode[] = (await getComments(slug)) || [];

  return (
    <>
      {comments.length > 0 && (
        <div className="shadow-lg rounded-lg pb-12 mb-8 p-4">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>

          {comments?.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment?.name}</span> on{" "}
                {formatDate(comment?.createdAt)}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment?.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
