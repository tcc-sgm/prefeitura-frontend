import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: string[];
  icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<SelectProps> = ({name, icon: Icon, options, ...rest}) => {

  const inputRef = useRef<HTMLSelectElement>(null);
  const [ isFocused, setIsFocused ] = useState(false);
  const [ isFilled, setIsFilled ] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [ fieldName, registerField ]);

  return (

    <Container isErrored={ !!error } isFilled={ isFilled } isFocused={ isFocused } >
      { Icon && <Icon size={20} />}
        <select
          onFocus={ handleInputFocus }
          onBlur={ handleInputBlur }
          defaultValue={ defaultValue }
          ref={inputRef} { ...rest } >
            {options.map(v => (
                  <option >{v}</option>
              ))
            }
        </select>

        { error &&
          <Error title={error}>
            <FiAlertCircle color="c53030" size={20} />
          </Error>
        }
    </Container>
  );
};

export default Select;
