import React from 'react';
import { useParams } from 'react-router-dom';

export default function ReactDocPage() {
  const params = useParams();

  return <div>ReactDocPage ##{params.docId}</div>;
}
