//postgres database connection file
let Pool: any;
try {
	// Use require to avoid TS compile errors when module is missing at type-check time
	Pool = require('pg').Pool;
} catch {
	// Fallback noop Pool to prevent crashes when 'pg' isn't available
	Pool = class {
		constructor() {}
		connect() { throw new Error("'pg' module not installed"); }
	};
}

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export default pool;