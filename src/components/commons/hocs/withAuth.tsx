import { useRouter } from 'next/router'
import { useEffect, ComponentType } from 'react'

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter()

    useEffect(() => {
      alert('withAuth HOC !')
    }, [router])

    return <Component {...props} />
  }
