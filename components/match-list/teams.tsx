import NextLink from "next/link";
import Image from "next/future/image";
import { Box, Link, Stack, Tooltip } from "@mui/material";

type Alliance = "red" | "blue";

interface MatchTeamsProps {
  alliance: Alliance;
  participants: any[];
  isWinner: boolean;
  selectedTeamKey?: string;
}

const MatchTeams: React.FC<MatchTeamsProps> = ({
  alliance,
  participants,
  isWinner,
  selectedTeamKey,
}) => {
  return (
    <Stack
      direction="row"
      spacing={0}
      bgcolor={
        alliance === "red" ? "var(--lighter-red)" : "var(--lighter-blue)"
      }
    >
      {participants.map((participant) => (
        <Stack
          key={participant.station}
          direction="row"
          justifyContent="center"
          px="0.5em"
          py="0.375em"
          fontSize="0.875em"
          width="4.75em"
          textAlign="center"
          spacing="0.5em"
          fontWeight={isWinner ? 700 : undefined}
          color={selectedTeamKey === participant.teamKey ? "white" : undefined}
          bgcolor={
            selectedTeamKey === participant.teamKey
              ? alliance === "red"
                ? "var(--red)"
                : "var(--blue)"
              : undefined
          }
        >
          <Box>
            <Image
              src={`/static/flags/4x3/${participant.countryCode.toLowerCase()}.svg`}
              width={16}
              height={12}
              style={{
                backgroundColor: "#ffffff",
                width: "1em",
                height: "0.75em",
              }}
              alt={`${participant.countryCode} flag`}
            />
          </Box>
          <NextLink
            href={`/team/${participant.country}`}
            prefetch={false}
            shallow
            passHref
          >
            <Link
              underline="hover"
              sx={{
                color: "inherit",
                "&:hover": {
                  color: "inherit",
                },
              }}
            >
              <Tooltip
                title={
                  participant.cardStatus === 2 ? "Disqualified (Red Card)" : ""
                }
                placement="top"
                arrow
              >
                <span
                  style={{
                    textDecoration:
                      participant.cardStatus === 2 ? "line-through" : undefined,
                  }}
                >
                  {participant.country}
                </span>
              </Tooltip>
            </Link>
          </NextLink>
        </Stack>
      ))}
    </Stack>
  );
};

export default MatchTeams;
