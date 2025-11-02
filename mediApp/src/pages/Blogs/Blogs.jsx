import React from "react";
import { useDynamicTitle } from "../../hooks/useDynamicTitle"; // Custom hook for dynamic page title

// Blogs page - answers React-related questions as per requirements
const Blogs = () => {
  // Set dynamic page title
  useDynamicTitle("Blogs");

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-600">
          React Blogs
        </h1>

        {/* Blog 1: useState */}
        {/* <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            1. What is <code className="text-blue-600">useState</code> and how
            does it work in React?
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>useState</strong> is a React Hook that allows you to add
              state to functional components. Before hooks, state was only
              available in class components.
            </p>

            <h3 className="text-xl font-semibold mb-2">How it works:</h3>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>
                It returns an array with two elements: the current state value
                and a function to update it
              </li>
              <li>The initial state is passed as an argument to useState</li>
              <li>
                When state updates, React re-renders the component with the new
                value
              </li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto">
                {`const [count, setCount] = useState(0);

// count is the state value
// setCount is the function to update state
// 0 is the initial value

setCount(5); // Updates count to 5
setCount(prevCount => prevCount + 1); // Updates based on previous value`}
              </pre>
            </div>

            <p className="text-gray-700">
              <strong>Example:</strong> In our Medical Appointment app, we use
              useState to manage: bookings array, showAll toggle for doctors,
              and availability status.
            </p>
          </div>
        </article> */}

        {/* Blog 2: useEffect */}
        {/* <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            2. What is the purpose of{" "}
            <code className="text-blue-600">useEffect</code> in React?
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>useEffect</strong> is a React Hook that performs side
              effects in functional components. It replaces lifecycle methods
              like componentDidMount, componentDidUpdate, and
              componentWillUnmount.
            </p>

            <h3 className="text-xl font-semibold mb-2">Common use cases:</h3>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Data fetching:</strong> Loading data from APIs when
                component mounts
              </li>
              <li>
                <strong>Subscriptions:</strong> Setting up event listeners or
                WebSocket connections
              </li>
              <li>
                <strong>DOM manipulation:</strong> Directly updating the DOM
                when needed
              </li>
              <li>
                <strong>localStorage:</strong> Reading/writing data on component
                mount/update
              </li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto">
                {`useEffect(() => {
  // Effect code runs after render
  const bookings = localStorage.getItem('bookings');
  setBookings(JSON.parse(bookings));
  
  // Cleanup function (optional)
  return () => {
    // Runs before component unmounts
  };
}, []); // Dependency array - empty means run once on mount`}
              </pre>
            </div>

            <p className="text-gray-700">
              <strong>Example:</strong> We use useEffect to load bookings from
              localStorage when the Bookings page mounts, and to find doctors by
              ID when DoctorDetails page loads.
            </p>
          </div>
        </article> */}

        {/* Blog 3: Custom Hook */}
        {/* <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            3. What is a custom hook in React and when should you use one?
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              A <strong>custom hook</strong> is a JavaScript function that
              starts with "use" and can call other hooks. It allows you to
              extract and reuse stateful logic across multiple components.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              When to use custom hooks:
            </h3>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>When you have repeated logic in multiple components</li>
              <li>To organize complex component logic</li>
              <li>To share stateful logic without prop drilling</li>
              <li>To make code more readable and maintainable</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto">
                {`// Custom hook for managing localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage:
const [bookings, setBookings] = useLocalStorage('bookings', []);`}
              </pre>
            </div>

            <p className="text-gray-700">
              <strong>Benefits:</strong> Reusability, separation of concerns,
              easier testing, and cleaner components.
            </p>
          </div>
        </article> */}

        {/* Blog 4: Controlled vs Uncontrolled Components */}
        {/* <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            4. Difference between controlled and uncontrolled components? Which
            one is better?
          </h2>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              Controlled Components:
            </h3>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Form data is handled by React state</li>
              <li>Value is controlled by React via useState</li>
              <li>Updates happen through onChange handlers</li>
              <li>Single source of truth (React state)</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto">
                {`const [name, setName] = useState('');

<input 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-green-600">
              Uncontrolled Components:
            </h3>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Form data is handled by the DOM itself</li>
              <li>Use refs to access input values</li>
              <li>Less React code, more traditional HTML behavior</li>
              <li>DOM is the source of truth</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto">
                {`const nameRef = useRef();

<input ref={nameRef} />
// Access value: nameRef.current.value`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
              <p className="font-semibold text-blue-800 mb-2">
                Which is better?
              </p>
              <p className="text-gray-700">
                <strong>Controlled components are generally better</strong>{" "}
                because they provide:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>More predictable behavior</li>
                <li>Easier validation and conditional rendering</li>
                <li>Better integration with React's data flow</li>
                <li>Instant feedback to users</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Use uncontrolled components only for simple forms or when
                integrating with non-React code.
              </p>
            </div>
          </div>
        </article> */}

        {/* Blog 5: useFormStatus */}
        {/* <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            5. Tell us something about{" "}
            <code className="text-blue-600">useFormStatus()</code>
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>useFormStatus</strong> is a new React Hook (introduced in
              React 19) that provides status information about a form's last
              submission. It's particularly useful with Server Actions.
            </p>

            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>
                <strong>pending:</strong> Boolean indicating if form is
                currently submitting
              </li>
              <li>
                <strong>data:</strong> FormData object being submitted
              </li>
              <li>
                <strong>method:</strong> HTTP method (GET or POST)
              </li>
              <li>
                <strong>action:</strong> Reference to the action function
              </li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto">
                {`import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function MyForm() {
  async function handleSubmit(formData) {
    // Server Action
    await saveData(formData);
  }
  
  return (
    <form action={handleSubmit}>
      <input name="name" />
      <SubmitButton />
    </form>
  );
}`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mt-4">
              <p className="font-semibold text-yellow-800 mb-2">
                Important Notes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  Must be called from a component rendered inside a &lt;form&gt;
                </li>
                <li>Only provides status for parent form, not all forms</li>
                <li>
                  Works best with React Server Components and Server Actions
                </li>
                <li>
                  Helps create better loading states and disable buttons during
                  submission
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mt-4">
              <strong>Use case:</strong> Perfect for showing loading spinners,
              disabling submit buttons, or displaying form submission status
              without managing state manually.
            </p>
          </div>
        </article> */}
      </div>
    </div>
  );
};

export default Blogs;
