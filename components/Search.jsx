'use client'

import { useState } from 'react';
import { Input, Button } from 'antd';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { SearchOutlined } from '@ant-design/icons';

function Search({placeholder}) {
  const { Search } = Input;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const search = searchParams.get('search')

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const rawInput = event.target.value;
    const sanitizedInput = sanitizeInput(rawInput);
    setInputValue(sanitizedInput);
  };

  const sanitizeInput = (input) => {
    // Удаление лидирующих и концевых пробелов
    let sanitizedInput = input.trim();

    // Экранирование служебных символов
    sanitizedInput = sanitizedInput.replace(/[*\[\]\"&\/:]/gi, (match) => `\\${match}`);

    return sanitizedInput;
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  ) 

  const createQueryDeleteParam = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams)
      params.delete(name)
      return params.toString()
    },
    [searchParams]
  ) 

  const handleSearch = (value, event, info) => {
    if (info.source === 'input') {
      router.push(pathname + '?' + createQueryString('search', inputValue))
    } else if (info.source === 'clear') {
      router.push(pathname + '?' + createQueryDeleteParam('search'))
    }
  };
  
  return (
    <>
    <Search
      value={inputValue}
      placeholder={placeholder}
      enterButton={
          <Button 
            icon={<SearchOutlined />}
            type="primary"
            disabled={inputValue === '' ? true : false}
          >
            Поиск
          </Button>
        }
      allowClear
      size="large"
      onChange={handleInputChange}
      onSearch={handleSearch}
    />
    </>
  );
}

export default Search;
