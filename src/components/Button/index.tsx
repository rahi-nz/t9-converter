import { DialBtn, Title, Subtitle } from './style';

interface Props {
  handleClick: () => void;
  disabled: boolean;
  title: string;
  subtitle: string;
}

const Button = ({ handleClick, disabled, title, subtitle }: Props) => {
  return (
    <DialBtn onClick={handleClick} disabled={disabled}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </DialBtn>
  );
};

export default Button;
