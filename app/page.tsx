export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-2xl px-6">
        <h1 className="text-4xl font-bold mb-8">Hello World</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Advantages of Using Claude Code
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Works directly in your terminal alongside your existing workflow</li>
          <li>Understands full project context by reading your codebase</li>
          <li>Edits, creates, and deletes files autonomously</li>
          <li>Runs shell commands like tests, linters, and builds</li>
          <li>Handles multi-step tasks with minimal guidance</li>
          <li>Supports custom memory and instructions via CLAUDE.md</li>
          <li>Extensible with MCP servers for external tool integration</li>
          <li>Manages git operations including commits and pull requests</li>
          <li>Parallel subagents speed up complex research and tasks</li>
          <li>Works with any language, framework, or toolchain</li>
        </ul>
      </div>
    </div>
  );
}
