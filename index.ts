#!/usr/bin/env node
import { program } from "commander";
import { CreateNodeMsCmd } from "./scripts/create-node-ms";

program
  .version("0.0.1", "-v, --version")
  .description("Generate a CLEAN nodejs project with TypeScript")
  .option("--noCommit", "Don't do a first commit")
  .option("--useNpm", "Use npm to install dependencies")
  .option("-p, --path <projectPath>", "Generated project path")
  .requiredOption("-pn, --projectName <projectName>", "Project name")
  .requiredOption("-e, --entityName <entityName>", "Name of the first entity")
  .option("-ep, --entityPluralName <entityPluralName>", "Pluralized name of the entity")
  .action(CreateNodeMsCmd);

program.parse(process.argv);
