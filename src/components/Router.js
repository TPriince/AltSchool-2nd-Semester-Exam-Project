import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Repositories, Repo, EachRepo, ErrorPage, TestErrorBoundary } from '../pages';

export default function Router() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/repos" element={<Repo />}>
          <Route path=":repoId" element={<EachRepo />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/test-error-boundary" element={<TestErrorBoundary />} />
      </Routes>
    </>
  )
}