const Config = {
  API_KEY: process.env.API_KEY || null,
  BACKEND_SERVICE_BASE_URL: process.env.BACKEND_SERVICE_BASE_URL ||
                            'https://backend-test-dot-pwc-sales-demos.appspot.com/',
  ELASTICSEARCH_INDEX: process.env.ELASTICSEARCH_INDEX || 'firebase-global',
  FIREBASE_AUTH_TOKEN: process.env.FIREBASE_AUTH_TOKEN || null,
  GOOGLE_AUTH_TOKEN: process.env.GOOGLE_AUTH_TOKEN || null,
  GOOGLE_SCOPES: [ process.env.GOOGLE_SCOPES || null ],
  NODE_ENV: process.env.NODE_ENV || null,
  PROJECT_ID: process.env.PROJECT_ID || null,
  PROJECT_ID_FOR_BUCKET: process.env.PROJECT_ID_FOR_BUCKET || null,
}

export default Config
