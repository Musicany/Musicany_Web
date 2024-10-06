const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  fontFamily: string,
) => `
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}%;
  font-family: ${fontFamily};
`;

export const font = {
  BigTitle: fontGenerator(700, 2.438, 110, "Pretendard-Regular"),
  Title: fontGenerator(700, 1.938, 130, "Pretendard-Regular"),
  SmallTitle: fontGenerator(400, 1.563, 130, "Pretendard-Regular"),
  BigText: fontGenerator(400, 1.25, 130, "Pretendard-Regular"),
  Text: fontGenerator(400, 1, 130, "Pretendard-Regular"),
  SmallText: fontGenerator(400, 0.813, 130, "Pretendard-Regular"),
  Caption: fontGenerator(400, 0.625, 130, "Pretendard-Regular"),
};