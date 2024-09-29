import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

interface AllianceTableProps {
  alliances: any
}

const AllianceTable: React.FC<AllianceTableProps> = ({
  alliances
}) => {

  return (
    <>
      <Grid container direction={"row"}>
        <Grid item xs={2}>
          <Typography>
            Rank
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography>
            Alliance
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography>
            Captain
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography>
            Pick 1
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography>
            Pick 2
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography>
            Pick 3
          </Typography>
        </Grid>
      </Grid>
      <Divider />

      {alliances.map((alliance) => (
        <Grid container key={alliance.rank} direction="row" sx={{ alignItems: 'center', my: 2 }}>
          <Grid item xs={2}>
            <Typography>
              {alliance.rank}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              {alliance.name}
            </Typography>
          </Grid>

          {/* Captain */}
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box>
              <Image
                src={`/static/flags/4x3/${alliance.captain.team?.countryCode.toLowerCase()}.svg`}
                width={16}
                height={12}
                style={{
                  backgroundColor: "#ffffff",
                  width: "1em",
                  height: "0.75em",
                }}
                alt={`${alliance.captain.team?.countryCode} flag`}
              />
            </Box>
            <Typography>
              {alliance.captain.team ? alliance.captain.team.teamNameShort : alliance.captain.teamKey}
            </Typography>
          </Grid>

          {/* Pick 1 */}
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box>
              <Image
                src={`/static/flags/4x3/${alliance.pick1.team?.countryCode.toLowerCase()}.svg`}
                width={16}
                height={12}
                style={{
                  backgroundColor: "#ffffff",
                  width: "1em",
                  height: "0.75em",
                }}
                alt={`${alliance.captain.team?.countryCode} flag`}
              />
            </Box>
            <Typography>
              {alliance.pick1.team ? alliance.pick1.team.teamNameShort : alliance.pick1.teamKey}
            </Typography>
          </Grid>

          {/* Pick 2 */}
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box>
              <Image
                src={`/static/flags/4x3/${alliance.pick2.team?.countryCode.toLowerCase()}.svg`}
                width={16}
                height={12}
                style={{
                  backgroundColor: "#ffffff",
                  width: "1em",
                  height: "0.75em",
                }}
                alt={`${alliance.pick2.team?.countryCode} flag`}
              />
            </Box>
            <Typography>
              {alliance.pick2.team ? alliance.pick2.team.teamNameShort : alliance.pick2.teamKey}
            </Typography>
          </Grid>

          {/* Pick 3 */}
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box>
              <Image
                src={`/static/flags/4x3/${alliance.pick3.team?.countryCode.toLowerCase()}.svg`}
                width={16}
                height={12}
                style={{
                  backgroundColor: "#ffffff",
                  width: "1em",
                  height: "0.75em",
                }}
                alt={`${alliance.pick3.team?.countryCode} flag`}
              />
            </Box>
            <Typography>
              {alliance.pick3.team ? alliance.pick3.team.teamNameShort : alliance.pick3.teamKey}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  )
};

export default AllianceTable;