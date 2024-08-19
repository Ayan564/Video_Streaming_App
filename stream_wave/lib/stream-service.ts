import { db } from "./db";

export const getStreamByUserId = async (userId: string) => {
  const stram = await db.stream.findUnique({
    where: {
      userId,
    },
  });
  return stram;
};
