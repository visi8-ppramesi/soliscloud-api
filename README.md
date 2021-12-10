## SolisCloud API
This is the package for SolisCloud API
first, you need to create .env file with SolisCloud base url as SOLIS_BASE_URL
when importing, call SolisApi.factory(), which returns SolisApi instance. then call initializeKeys with key id (as a string) for the first param and secret key as the second param.