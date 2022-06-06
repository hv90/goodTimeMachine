import mysql from "mysql";

let count = 0;

async function createSchema(theIceX_db) {
  const CREATE_SCHEMA = "CREATE SCHEMA IF NOT EXISTS TheIceX_db;";
  const USE_SCHEMA = "USE TheIceX_db";

  await theIceX_db.query(CREATE_SCHEMA, (err, result) => {
    if (err) throw err;
    console.log("schema created");
  });

  await theIceX_db.query(USE_SCHEMA, (err, result) => {
    if (err) throw err;
    console.log("schema is used");
  });

  return theIceX_db;
}

async function createTable(theIceX_db) {
  const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS theIceX(
        id int primary key auto_increment,

        quality varchar(30) character set utf8,
        voice varchar(30) character set utf8,
        extension varchar(30) character set utf8,
        job varchar(30) character set utf8,
        age varchar(30) character set utf8,
        sexuality varchar(30) character set utf8,
        duration varchar(30) character set utf8,

        modelName varchar(30) character set utf8,
        quickTip varchar(30) character set utf8,
        filePath varchar(500) character set utf8,
        
        toFixes varchar(500) character set utf8,
        medias varchar(500) character set utf8,
        relationships varchar(500) character set utf8,
        tags varchar(500) character set utf8,
        actions varchar(500) character set utf8,
        moods varchar(500) character set utf8
    )`;

  theIceX_db.query(CREATE_TABLE, (err, result) => {
    if (err) throw err;
    console.log("table created");
  });

  return theIceX_db;
}

export async function insertIntoTable(query) {
  const INSERT_INTO_TABLE = `INSERT INTO theIceX (${Object.keys(
    query
  ).toString()}) 
  VALUES (${Object.values(query)
    .map((value) => {
      if (Array.isArray(value)) {
        return `"${value.toString()}"`;
      }
      return `"${value}"`;
    })
    .toString()})`;

  const theIceX_db = await createConnection();

  setTimeout(async () => {
    await theIceX_db.query(INSERT_INTO_TABLE, (err, result) => {
      if (err) throw err;
      console.log("added successfully in the table ");
    });
  }, 1000);

  return theIceX_db;
}

export async function closeConnection(theIceX_db) {
  console.log("end");
  await theIceX_db.end();
}

export async function createConnection() {
  //database configs
  const config_db = {
    host: "localhost",
    user: "root",
    password: "password",
  };

  //creating connection
  const theIceX_db = await mysql.createConnection(config_db);

  //connecting to database
  await theIceX_db.connect(async (err) => {
    if (err) throw err;
    console.log("connected to mysql");

    await createSchema(theIceX_db);
    await createTable(theIceX_db);
  });

  return await theIceX_db;
}

// ***************************************************************************************

export async function lastfmCreateConnection() {
  //database configs
  const config_db = {
    host: "localhost",
    user: "root",
    password: "",
  };
  const USE_SCHEMA = "USE TheIceX_db";

  //creating connection
  const lastfm_db = await mysql.createConnection(config_db);

  //connecting to database
  await lastfm_db.connect(async (err) => {
    if (err) throw err;
    console.log("connected to mysql");
  });

  await lastfm_db.query(USE_SCHEMA, (err, result) => {
    if (err) throw err;
    console.log("schema is used");
  });

  return lastfm_db;
}

export async function lastfmSearchUserArtistsByGenre(genre, res) {
  const theIceX_db = await lastfmCreateConnection();
  const QUERY_ARTISTS_BY_TAG = `SELECT * FROM theIceX
                                    WHERE tags LIKE '%${genre}%'
                                    ORDER BY playcount DESC`;

  await theIceX_db.query(QUERY_ARTISTS_BY_TAG, async (err, results) => {
    if (err) throw err;
    res.write("artist | playcount | tags \n");
    results.forEach(async (result) => {
      const { artist, playcount, tags } = result;
      res.write(`${artist} | ${playcount} | ${tags} \n`);
    });
    await res.end();
  });
}

export async function lastfmSearchUserTopTracksByArtist(artist, res) {
  const lastfmUserTopTracks_db = await lastfmCreateConnection();
  const QUERY_SONGS_BY_ARTIST = `SELECT * FROM lastfmUserTopTracks
                                    WHERE artist LIKE '%${artist}%'
                                    ORDER BY playcount DESC`;

  await lastfmUserTopTracks_db.query(
    QUERY_SONGS_BY_ARTIST,
    async (err, results) => {
      if (err) throw err;
      res.write("artist | playcount | song \n");
      results.forEach(async (result) => {
        const { artist, playcount, song } = result;
        res.write(`${artist} | ${playcount} | ${song} \n`);
      });
      await res.end();
    }
  );
}

export async function lastfmSearchUserTopTracksBySong(song, res) {
  const lastfmUserTopTracks_db = await lastfmCreateConnection();
  const QUERY_ARTIST_BY_SONG = `SELECT * FROM lastfmUserTopTracks
                                    WHERE song LIKE '%${song}%'
                                    ORDER BY playcount DESC`;

  await lastfmUserTopTracks_db.query(
    QUERY_ARTIST_BY_SONG,
    async (err, results) => {
      if (err) throw err;
      res.write("artist | playcount | song \n");
      results.forEach(async (result) => {
        const { artist, playcount, song } = result;
        res.write(`${artist} | ${playcount} | ${song} \n`);
      });
      await res.end();
    }
  );
}
