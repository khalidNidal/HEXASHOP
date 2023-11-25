  "use client"
import styles from './LogoutButton.module.css'
export default function LogoutButton() {
  return (
    <button  className={styles.logout}
    onClick={() => {

        console.log("hi")
      
    }}
    >
      Logout  

    </button>
  )
}
