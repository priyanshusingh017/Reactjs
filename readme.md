# ReactJS Project

Welcome to the ReactJS project repository.

## PowerShell Execution Policy for npm Install

If you encounter issues running `npm install` due to PowerShell script restrictions, you may need to temporarily adjust your execution policy. Run the following commands in your PowerShell terminal before running `npm install`:

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

This will allow the install process to complete without permanently changing your system's execution policy.
