import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleClick() {
    try {
      const confirm = window.confirm('Tem certeza que deseja deletar ? ');
      if (confirm) {
        const { url, options } = PHOTO_DELETE(id);
        const { response } = await request(url, options);
        if (response.ok) window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
}

export default PhotoDelete;
