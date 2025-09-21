# Repository Guidelines

## Project Structure & Module Organization
Soma Base currently provides a clean slate; contributions should adopt the following scaffold:
- `agents/<agent-name>/` for each autonomous workflow, with `__init__.py` or `index.ts` depending on language and a short `README.md` describing responsibilities.
- `packages/` for shared libraries or models that multiple agents reuse.
- `configs/` for runtime configuration, prompts, and environment templates.
- `tests/` mirroring the directory tree of the code under test.
- `docs/` for design notes or diagrams referenced by multiple agents.
Keep assets such as fixtures or mock data in `tests/fixtures/` to keep runtime packages lean.

## Build, Test, and Development Commands
Wrap all developer commands in the project `Makefile` once created. Standard targets should include:
- `make bootstrap` — create the virtualenv or node_modules and install pinned dependencies.
- `make format` — run the formatter (e.g., `black`, `ruff`, or `prettier`) over code and prompt assets.
- `make test` — execute the automated test suite with verbose output.
- `make check` — aggregate formatting, linting, and unit tests for CI parity.
Local experiments belong in notebooks inside `notebooks/` and must not modify production assets.

## Coding Style & Naming Conventions
Follow PEP 8 for Python components and default ESLint + Prettier rules for TypeScript. Use 4 spaces for Python and 2 spaces for TypeScript/JSON/YAML. Agents and packages use kebab-case directory names (`agents/sequence-builder`); classes are PascalCase; functions and files are snake_case. Keep prompt files `.md` or `.txt` with descriptive prefixes (`prompt.collect_medical_history.md`). Run `make format` before every commit.

## Testing Guidelines
Adopt `pytest` with `pytest-cov` for Python and `vitest` for TypeScript agents. Name tests `test_<unit>` and mirror package paths (`tests/agents/sequence_builder/test_controller.py`). Aim for ≥85% coverage; add regression tests for every bug fix. Use `.env.test` for deterministic integration runs and avoid hitting external network services—mock them via fixtures.

## Commit & Pull Request Guidelines
Write commits in imperative mood (`Add sequence builder agent scaffold`). Keep commits focused and include rationale in the body when introducing new behaviours. Pull requests need: summary of intent, linked issues or tickets, test evidence (`make check` output), and screenshots or terminal captures when UI/CLI output changes. Draft PRs are encouraged for early feedback; mark TODOs with `TODO(username):` notes and resolve before requesting review.

## Security & Configuration Tips
Never commit secrets; rely on `.env.example` to document required variables. Review third-party dependencies before adding them to `requirements.txt` or `package.json`. For agents that call external APIs, provide throttle guards and timeout defaults, and document required scopes in `docs/integrations.md`.
