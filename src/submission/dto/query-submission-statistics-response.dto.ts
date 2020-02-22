import { ApiProperty } from "@nestjs/swagger";
import { SubmissionMetaDto } from "./submission-meta.dto";

export enum QuerySubmissionStatisticsResponseError {
  NO_SUCH_PROBLEM = "NO_SUCH_PROBLEM",
  TAKE_TOO_MANY = "TAKE_TOO_MANY"
}

export class QuerySubmissionStatisticsResponseDto {
  @ApiProperty()
  error?: QuerySubmissionStatisticsResponseError;

  @ApiProperty({ type: [SubmissionMetaDto] })
  submissions?: SubmissionMetaDto[];

  @ApiProperty()
  count?: number;
}