import { debounce } from 'lodash';
import Button from 'components/Button';
import { FixedSizeList as List } from 'react-window';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import {
  Filter,
  Container,
  KeyPadContainer,
  Input,
  Word,
  ListContainer,
  Row,
  ClearBtn,
} from './style';
import { PHONE_BUTTONS } from './const';

const GUTTER_SIZE = 5;

const KeyPad = () => {
  const [input, setInput] = useState<string>('');
  const [wordList, setWordList] = useState<string[]>();
  const [onlyRealWords, setOnlyRealWords] = useState<boolean>(false);
  const validInput = input.length > 0;
  /**
   * debounce: to fire it only when the user has finished typing
   * useCallback: store the reference
   */
  const debounceLoadData = useCallback(
    debounce(async (numbers, realWord) => {
      if (numbers.length > 0) {
        const requestBody = {
          onlyRealWords: realWord,
          numbers,
        };
        await fetch('/api/converter', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
        })
          .then(res => res.json())
          .then(data => setWordList(data))
          .catch(rejected => {
            console.warn(rejected);
          });
      } else {
        setWordList([]);
      }
    }, 1000),
    [],
  );

  const onClick = key => {
    setInput(prevState => prevState.concat(key));
    debounceLoadData(input.concat(key), onlyRealWords);
  };

  const onRealWord = () => {
    setOnlyRealWords(prevState => !prevState);
    debounceLoadData(input, !onlyRealWords);
  };

  const onClear = () => {
    if (validInput) {
      setInput(prevState => prevState.slice(0, -1));
      debounceLoadData(input.slice(0, -1), onlyRealWords);
    }
  };

  const Column = ({ index, style }: any) => (
    <Word
      style={{
        ...style,
        left: style.left + GUTTER_SIZE,
        top: style.top + GUTTER_SIZE,
        width: style.width - GUTTER_SIZE,
        height: 25,
      }}
    >
      {wordList[index]}
    </Word>
  );

  return (
    <>
      <Filter>
        <input
          name="realWord"
          id="realWord"
          type="checkbox"
          checked={onlyRealWords}
          onChange={onRealWord}
        />
        <label htmlFor="realWord">Show only real words</label>
      </Filter>
      <Container>
        <Input type="number" defaultValue={input} disabled />
        <ListContainer>
          {wordList && (
            <List
              height={60}
              itemCount={wordList.length}
              itemSize={100}
              layout="horizontal"
              width={240}
            >
              {Column}
            </List>
          )}
        </ListContainer>
        <Row>
          <Image width={30} height={30} src="/icons/plus.svg" alt="kiwi" />
          <ClearBtn enable={validInput}>
            <Image
              width={30}
              height={30}
              src="/icons/clear-icon.svg"
              alt="kiwi"
              onClick={onClear}
            />
          </ClearBtn>
        </Row>
        <KeyPadContainer>
          {PHONE_BUTTONS.map(button => (
            <Button
              handleClick={() => onClick(button.value)}
              key={button.value}
              disabled={button.disabled}
              title={button.title}
              subtitle={button.subtitle}
            />
          ))}
        </KeyPadContainer>
      </Container>
    </>
  );
};

export default KeyPad;
