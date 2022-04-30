import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {
    const { data: session } = useSession()
    console.log(session)

    return session ? (
        <button
            className={styles.signInButton}
            type="button"
            onClick={() => signOut()}
        >
            <FaGithub color='#04d361' />
            Robson Oliveira
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button
            className={styles.signInButton}
            type="button"
            onClick={() => signIn('github')}
        >
            <FaGithub color='#eba417' />
            Sign in with GitHub
        </button>
    )
}