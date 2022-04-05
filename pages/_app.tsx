import '@/styles/global.css'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'
import { anon, db } from '@/lib/firebase'
import {
  setDoc,
  doc as fsdoc,
  writeBatch,
  serverTimestamp,
  arrayUnion,
  updateDoc,
  Timestamp
} from 'firebase/firestore'
import { useEffect } from 'react'

type FirestoreRequest = {
  collection: string
  docs: {
    [key: string]: {
      [key: string]: any
    }
  }
  // merge: true  => update parts that changed only
  // merge: false => overwrite database entirely
  // default is true
  merge?: boolean
}

const push = async ({ collection, docs, merge = true }: FirestoreRequest) => {
  /* create the collection if doesn't exist yet, and push the date */
  await setDoc(fsdoc(db, collection, '.init'), {
    date: new Date().toString()
  })

  /* open a write ticket (a batch, a queue of operations) */
  const batch = writeBatch(db)

  /* each key in the data object gets mapped to a Firestore document. */
  Object.keys(docs).forEach((doc: string) => {
    /* add to queue with .set */
    batch.set(fsdoc(db, collection, doc), docs[doc], { merge })
  })

  /* execute all writes in the queue with .commit */
  try {
    await batch.commit()
  } catch (err) {
    console.error('Error adding document: ', err)
  }
}

export default function App({ Component, pageProps }) {
  const myDoc = fsdoc(db, 'analytics', 'views')
  const ts = Timestamp.now()

  useEffect(() => {
    updateDoc(myDoc, {
      timestamp: arrayUnion(ts)
    })
  }, [])

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
