import Link from 'next/link'
import { Suspense } from 'react'
import { All } from '../all'
import { Get } from '../get'
import { cache } from '../searchParams'
import { Set } from '../set'

export default function Page({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const { str, bool, num, def, nope } = cache.parse(searchParams)
  return (
    <>
      <h1>Page A</h1>
      <h2>From parse:</h2>
      <p style={{ display: 'flex', gap: '1rem' }}>
        <span id="parse-str">{str}</span>
        <span id="parse-num">{num}</span>
        <span id="parse-bool">{String(bool)}</span>
        <span id="parse-def">{def}</span>
        <span id="parse-nope">{String(nope)}</span>
      </p>
      <All />
      <Get />
      <Suspense>
        <Set />
      </Suspense>
      <ul>
        <li>
          <Link href="/app/cache?str=from-a">To root page</Link>
        </li>
        <li>
          <Link href="/app/cache/b?str=from-a">To page B</Link>
        </li>
      </ul>
    </>
  )
}
