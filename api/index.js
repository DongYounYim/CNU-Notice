export const getAllBoards = async () => {
  try {
    const res = await fetch(
      'https://api.cnu.ac.kr/svc/offcam/pub/cmsBoard?AUTH_KEY=FE271E66B72843E2A6B0CFEBE06BC09DFE5534B2',
      { method: 'POST' },
    );
    return res.json();
  } catch (e) {
    console.error(e);
  }
};
