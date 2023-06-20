import styled, { css } from "styled-components";
import { IProps } from "./IProps";

export const H1 = styled.h1<IProps>`
  ${({ weight, color, align, transform, theme }) => css`
    font-weight: ${weight ? theme.text.fonts.weights[weight] : theme.text.fonts.weights.regular};
    color: ${color ? theme.text.colors[color] : theme.text.colors.primary};
    text-align: ${align ? theme.text.align[align] : theme.text.align.left};
    font-size: ${theme.text.fonts.sizes.xxxl};
    line-height: ${theme.text.fonts.lineHeights.xxxl};
    text-transform: ${transform ? theme.text.transform[transform] : theme.text.transform.none};
    width: 100%;
  `}
`;

export const H2 = styled.h2<IProps>`
  ${({ weight, color, align, transform, theme }) => css`
    font-weight: ${weight ? theme.text.fonts.weights[weight] : theme.text.fonts.weights.regular};
    color: ${color ? theme.text.colors[color] : theme.text.colors.primary};
    text-align: ${align ? theme.text.align[align] : theme.text.align.left};
    font-size: ${theme.text.fonts.sizes.xxl};
    line-height: ${theme.text.fonts.lineHeights.xxl};
    text-transform: ${transform ? theme.text.transform[transform] : theme.text.transform.none};
    width: 100%;
  `}
`;

export const H3 = styled.h3<IProps>`
  ${({ weight, color, align, transform, theme }) => css`
    font-weight: ${weight ? theme.text.fonts.weights[weight] : theme.text.fonts.weights.regular};
    color: ${color ? theme.text.colors[color] : theme.text.colors.primary};
    text-align: ${align ? theme.text.align[align] : theme.text.align.left};
    font-size: ${theme.text.fonts.sizes.xl};
    line-height: ${theme.text.fonts.lineHeights.xl};
    text-transform: ${transform ? theme.text.transform[transform] : theme.text.transform.none};
    width: 100%;
  `}
`;

export const H4 = styled.h4<IProps>`
  ${({ weight, color, align, transform, theme }) => css`
    font-weight: ${weight ? theme.text.fonts.weights[weight] : theme.text.fonts.weights.regular};
    color: ${color ? theme.text.colors[color] : theme.text.colors.primary};
    text-align: ${align ? theme.text.align[align] : theme.text.align.left};
    font-size: ${theme.text.fonts.sizes.lg};
    line-height: ${theme.text.fonts.lineHeights.lg};
    text-transform: ${transform ? theme.text.transform[transform] : theme.text.transform.none};
    width: 100%;
  `}
`;

export const H5 = styled.h5<IProps>`
  ${({ weight, color, align, transform, theme }) => css`
    font-weight: ${weight ? theme.text.fonts.weights[weight] : theme.text.fonts.weights.regular};
    color: ${color ? theme.text.colors[color] : theme.text.colors.primary};
    text-align: ${align ? theme.text.align[align] : theme.text.align.left};
    font-size: ${theme.text.fonts.sizes.md};
    line-height: ${theme.text.fonts.lineHeights.md};
    text-transform: ${transform ? theme.text.transform[transform] : theme.text.transform.none};
    width: 100%;
  `}
`;

export const H6 = styled.h6<IProps>`
  ${({ weight, color, align, transform, theme }) => css`
    font-weight: ${weight ? theme.text.fonts.weights[weight] : theme.text.fonts.weights.regular};
    color: ${color ? theme.text.colors[color] : theme.text.colors.primary};
    text-align: ${align ? theme.text.align[align] : theme.text.align.left};
    font-size: ${theme.text.fonts.sizes.sm};
    line-height: ${theme.text.fonts.lineHeights.sm};
    text-transform: ${transform ? theme.text.transform[transform] : theme.text.transform.none};
    width: 100%;
  `}
`;

export const P = styled.span<IProps>`
  ${({ weight, color, align, transform, theme }) => css`
    font-weight: ${weight ? theme.text.fonts.weights[weight] : theme.text.fonts.weights.regular};
    color: ${color ? theme.text.colors[color] : theme.text.colors.primary};
    text-align: ${align ? theme.text.align[align] : theme.text.align.left};
    font-size: ${theme.text.fonts.sizes.xs};
    line-height: ${theme.text.fonts.lineHeights.xs};
    text-transform: ${transform ? theme.text.transform[transform] : theme.text.transform.none};
    width: 100%;
  `}
`;
