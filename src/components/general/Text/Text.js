import styled from 'styled-components/native';

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;
const favLabel = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.bold};
    margin-left: 16px;
`;
const restaurantLabel = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.label};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.text.secondary};
    padding: ${`${theme.sizes[2]} ${theme.sizes[0]}`};
`;
const title = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
`;
const transparent = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.button};
    color: transparent;
`;

const variants = {
	body,
	label,
	caption,
	error,
	hint,
	title,
	restaurantLabel,
	transparent,
	favLabel,
};

const Text = styled.Text`
	${({ theme }) => defaultTextStyles(theme)}
	${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
	variant: 'body',
};

export default Text;
