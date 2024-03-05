'use client';
import { Button } from 'shafa-bo';
import { ShaparakErrorList } from '@/common/apis/test-api/shaparak.query';
import { addShaparakError } from '@/common/apis/test-api/shaparak.mutation';

function page() {
  const a = ShaparakErrorList();
  console.log(a);

  const addErrorHandler = () => {
    const body = {
      errorCode: 12,
      errorDesc: 12,
      refName: 1212,
      message: 'asas',
    };

    addShaparakError(body);
  };

  return (
    <div>
      <Button onClick={addErrorHandler}> add error</Button>
    </div>
  );
}

export default page;
