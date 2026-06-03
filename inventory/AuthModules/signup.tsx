function Signup() {
    return (
        <div className="max-w-md rounded-3xl bg-white p-6 shadow-lg shadow-slate-200">
            <h1 className="text-3xl font-bold underline text-slate-900">
                Welcome to Our Inventory Management Portal!
            </h1>
            <p className="mt-3 text-slate-600">
                Please sign up to access your dashboard.
            </p>
            <form className="mt-8 space-y-4">
                <div>
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
                        Role
                    </label>
                    <select
                        id="role"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="">Select your role</option>
                        <option value="admin">Admin</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
export default Signup;