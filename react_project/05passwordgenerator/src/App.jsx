import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // State variables
  const [length, setlength] = useState(8)          // Password length (default: 8)
  const [numberallow, setnumberAllowed] = useState(false)  // Include numbers toggle
  const [charallow, setcharallowed] = useState(false)      // Include special chars toggle
  const [Password, setPassword] = useState("")     // Generated password storage

  // Ref for password input field
  const PasswordRef = useRef(null)

  /**
   * Password generator function
   * Uses useCallback to memoize the function and only recreate when dependencies change
   */
  const Passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // Base character set

    // Add numbers if allowed
    if (numberallow) str += "0123456789"
    // Add special characters if allowed
    if (charallow) str += "!@#$%^&*()_+{}[]~`"

    // Generate password by randomly selecting characters
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    // Update password state
    setPassword(pass)
  }, [length, numberallow, charallow, setPassword])

  /**
   * Copy password to clipboard function
   * Uses useCallback to memoize the function
   */
  const copypasswordtoclipboard = useCallback(() => {
    // Select the password text
    PasswordRef.current?.select()
    // Set selection range (for mobile compatibility)
    PasswordRef.current?.setSelectionRange(0, 99)
    // Copy to clipboard
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  /**
   * Effect hook to generate password when dependencies change
   * Runs when component mounts and when length, numberallow, or charallow change
   */
  useEffect(() => {
    Passwordgenerator()
  }, [length, numberallow, charallow, Passwordgenerator])

  return (
    // Main container - centers the app vertically and horizontally
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Password generator box */}
      <div className='w-full max-w-md mx-4 shadow-lg rounded-lg px-4 py-6 bg-gray-800 text-white'>
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-400">
          Password Generator
        </h1>

        {/* Password display and copy section */}
        <div className='flex shadow rounded-lg overflow-hidden mb-6'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-3 px-4 text-gray-800'
            placeholder='Password'
            readOnly
            ref={PasswordRef}
          />
          <button
            onClick={copypasswordtoclipboard}
            className='outline-none bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 transition-colors duration-200'
          >
            Copy
          </button>
        </div>

        {/* Controls section */}
        <div className='flex flex-col gap-4'>
          {/* Password length slider */}
          <div className='flex items-center justify-between'>
            <label>Length: {length}</label>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='w-48 cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
          </div>

          {/* Include numbers checkbox */}
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              defaultChecked={numberallow}
              id='numberInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }}
              className='h-4 w-4'
            />
            <label htmlFor='numberInput'>Include Numbers</label>
          </div>

          {/* Include special characters checkbox */}
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              defaultChecked={charallow}
              id='charInput'
              onChange={() => {
                setcharallowed((prev) => !prev)
              }}
              className='h-4 w-4'
            />
            <label htmlFor='charInput'>Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App