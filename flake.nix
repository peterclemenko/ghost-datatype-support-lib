{
  description = "DevShell flake for ghost-datatype-support-lib using nixpkgs/nixos-unstable";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells = {
          default = pkgs.mkShell {
            name = "ghost-datatype-support-lib-dev";

            # Include the requested packages from nixpkgs (nixos-unstable)
            buildInputs = with pkgs; [ act fnm nodejs pnpm git coreutils ];

            # Common developer environment variables and helpful message
            shellHook = ''
              echo "Entering devshell for ghost-datatype-support-lib (${system})"
              echo "Available: act=$(command -v act >/dev/null && echo yes || echo no), fnm=$(command -v fnm >/dev/null && echo yes || echo no)"
            '';
          };
        };
      });
}
