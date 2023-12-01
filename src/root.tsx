// @refresh reload
import {
  Html,
  Head,
  Body,
  Meta,
  Routes,
  FileRoutes,
  Scripts,
  ErrorBoundary,
  Title
} from 'solid-start'
import { Suspense } from 'solid-js'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Title>Data Broker Remover Tool</Title>
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
