<#
.SYNOPSIS
    Launch Claude Code routed through FreeModel / FreeLLMAPI
.DESCRIPTION
    Configures Anthropic API environment variables and starts Claude Code with any model.
.PARAMETER ApiKey
    Your API key (e.g. FreeModel 'fm_...' or FreeLLMAPI 'freellmapi-...').
.PARAMETER BaseUrl
    The API base URL (Default: https://freemodel.in/v1).
.PARAMETER Model
    The model to use (e.g. claude-sonnet-4.6, claude-opus-4.8, gpt-4o, etc.).
#>
param (
    [string]$ApiKey = $env:ANTHROPIC_AUTH_TOKEN,
    [string]$BaseUrl = "https://freemodel.in/v1",
    [string]$Model = "claude-sonnet-4.6"
)

if (-not $ApiKey) {
    $ApiKey = Read-Host "Enter your API Key (from freemodel.in, e.g. fm_...)"
}

if (-not $ApiKey) {
    Write-Error "An API key is required to connect."
    exit 1
}

# Clean URL
$cleanUrl = $BaseUrl.TrimEnd('/')

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Claude Code Free Provider Launcher     " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Base URL : $cleanUrl" -ForegroundColor Yellow
Write-Host "Model    : $Model" -ForegroundColor Yellow
Write-Host "Key      : $($ApiKey.Substring(0, [Math]::Min(12, $ApiKey.Length)))..." -ForegroundColor Yellow

$env:ANTHROPIC_BASE_URL = $cleanUrl
$env:ANTHROPIC_AUTH_TOKEN = $ApiKey
$env:ANTHROPIC_API_KEY = $ApiKey
$env:ANTHROPIC_MODEL = $Model
$env:CLAUDE_CODE_AUTO_MODE_SERVER = "0"

Write-Host "`nStarting Claude Code with $Model..." -ForegroundColor Green
claude --model $Model @args
