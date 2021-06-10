import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecipeRequest = (recipeId) => {
  const [editorData, setEditorData] = useState(null);
  const [isCreator, setIsCreator] = useState(false);
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    axios(
      { method: 'GET', url: `/recipes/${recipeId}` },
      { cancelToken: source.token }
    )
      .then((res) => {
        setIsCreator(res.data.isCreator);
        setEditorData(res.data.editorData);
      })
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.warn('Request canceled', thrown.message);
        } else {
          console.error(thrown);
        }
      });

    return () => source.cancel('I canceled it');
  }, [recipeId]);

  return [editorData, isCreator];
};

export default useRecipeRequest;
