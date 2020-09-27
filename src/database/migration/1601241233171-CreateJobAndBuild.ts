import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateJobAndBuild1601241233171 implements MigrationInterface {
  name = 'CreateJobAndBuild1601241233171'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "job" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`)
    await queryRunner.query(`CREATE TABLE "job_command" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cwd" varchar NOT NULL, "command" varchar NOT NULL, "args" varchar NOT NULL, "job_id" integer, CONSTRAINT "FK_bc6a9847cfdf604e22984507836" FOREIGN KEY ("job_id") REFERENCES "job" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`)
    await queryRunner.query(`CREATE TABLE "build" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "status" integer NOT NULL DEFAULT (0), "created_at" datetime NOT NULL DEFAULT (datetime('now')), "job_id" integer, "user_username" varchar, CONSTRAINT "FK_b673a1bec6aefa816ebb053155d" FOREIGN KEY ("job_id") REFERENCES "job" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_253cd60da3b5a7144b5c8d34244" FOREIGN KEY ("user_username") REFERENCES "user" ("username") ON DELETE NO ACTION ON UPDATE NO ACTION)`)
    await queryRunner.query(`CREATE TABLE "build_step" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "line" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "build_id" integer, CONSTRAINT "FK_48f6885c5ab745254455a5ba908" FOREIGN KEY ("build_id") REFERENCES "build" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`)
    await queryRunner.query(`CREATE TABLE "build_step_log" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "line" varchar NOT NULL, "build_step_id" integer, CONSTRAINT "FK_9fc33a05c6dd65910dfe94bf325" FOREIGN KEY ("build_step_id") REFERENCES "build_step" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "build_step_log"`)
    await queryRunner.query(`DROP TABLE "build"`)
    await queryRunner.query(`DROP TABLE "build_step"`)
    await queryRunner.query(`DROP TABLE "job_command"`)
    await queryRunner.query(`DROP TABLE "job"`)
  }
}
