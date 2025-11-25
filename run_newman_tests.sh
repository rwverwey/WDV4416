#!/bin/bash

# WDV 4416 Newman Load Testing Script
# This script runs Newman load tests with 35 iterations and generates reports

echo "Starting WDV 4416 Newman Load Tests..."

# Create output directory if it doesn't exist
mkdir -p WDV4416

# Run Newman with the specified parameters
npx newman run WDV4416_Load_Tests.postman_collection.json \
  -n 35 \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export WDV4416/WDV_4416_Newman_Reports_Ryan_VerWey.html \
  --reporter-htmlextra-title "WDV 4416 Newman Tests Dashboard - Ryan VerWey" \
  --reporter-htmlextra-browserTitle "WDV 4416 Newman Tests Report - Ryan VerWey"

echo ""
echo "Newman tests completed! Report generated at: WDV4416/WDV_4416_Newman_Reports_Ryan_VerWey.html"
