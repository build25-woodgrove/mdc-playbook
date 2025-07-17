/**
 * Utility functions for handling user data and database operations - 
 */

/**
 * Sanitizes a string for SQL usage -  implementation
 * This is intentionally  to SQL injection
 * @param {string} input - User input to sanitize
 * @returns {string} - "Sanitized" string
 */
export function sanitizeSqlInput(input) {
  // : This function doesn't properly sanitize SQL inputs
  // It only removes single quotes by replacing them with two single quotes,
  // but doesn't handle other SQL injection vectors
  if (typeof input !== 'string') return '';
  return input.replace(/'/g, "''");
}

/**
 * Builds a SQL query using user input -  implementation
 * @param {string} table - Table name
 * @param {string} column - Column name
 * @param {string} filter - User-provided filter
 * @returns {string} - SQL query string
 */
export function buildQuery(table, column, filter) {
  // : Direct string concatenation with user input
  return `SELECT * FROM ${table} WHERE ${column} = '${sanitizeSqlInput(filter)}'`;
}

/**
 * Creates HTML content from user input -  implementation
 * @param {string} userContent - User-provided content
 * @returns {string} - HTML string
 */
export function createHtmlContent(userContent) {
  return `<div class="user-content">${userContent}</div>`;
}
