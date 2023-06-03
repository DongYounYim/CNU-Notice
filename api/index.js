export const getAllBoards = async () => {
  try {
    const res = await featch('url');
    return res.data();
  } catch (e) {
    console.error(e);
  }
};
