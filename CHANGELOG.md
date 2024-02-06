[0.1.0]
* Initial version

[0.2.0]
* Fix post install

[0.3.0]
* Clear caches on startup

[1.0.0]
* Update Koel to 5.0.2
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.0.0)
* Koel is now powered by Laravel 8
* The simple "filter" box has been completely overhauled
* Admins can now be created from the Users screen
* The blurry album thumbnails are now generated and served by the server instead of using the CPU-expensive CSS blur filter
* Authentication is now handled by Laravel Sanctum instead of JWT. This eliminates some nasty session expiry bugs.
* You can now like/unlike song directly from the song-list

[1.1.0]
* Update base image to v3
* Update PHP to 7.4

[1.1.1]
* Update Koel to 5.1.1
* Fix the bug where TNTSearch fails to work due to search-indexes being removed during build.

[1.1.2]
* Update Koel to 5.1.3
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.1.3)

[1.1.3]
* Update Koel to 5.1.4
* Add login throttling

[1.1.4]
* Update Koel to 5.1.5
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.1.5)

[1.1.5]
* Update Koel to 5.1.6
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.1.6)

[1.1.6]
* Update Koel to 5.1.8
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.1.8)

[1.1.7]
* Update Koel to 5.1.10
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.1.10)
* fix: do not remove S3-hosted songs post-sync #1390
* feat: increase char limit for name fields #1391
* fix: song list cut at bottom https://github.com/koel/core/commit/c834d66b3a43fbc5cad019ce264c672adb3b1a23

[1.1.8]
* Update Koel to 5.1.12
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.1.12)
* feat: enable usage with S3-compatible services by @sergiustheblack in #1381
* fix: better handle bottom cut-off of playlists by @phanan in koel/core@ab7f8fc
* fix: broken info service by @phanan in koel/core@7372097

[1.1.9]
* Update Koel to 5.1.13
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.1.13)
* fix: broken singe song download by @phanan

[1.1.10]
* Update Koel to 5.1.14
* [Full changelog](https://github.com/koel/koel/releases/tag/v5.1.14)

[1.2.0]
* Update Koel to 6.0.2
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.0.0)
* Use pre-compiled Koel assets
* Use php 8.1

[1.2.1]
* Update Koel to 6.0.3
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.0.3)
* fix: only drop foreign on non SQLite

[1.2.2]
* Update Koel to 6.0.4
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.0.4)

[1.2.3]
* Update Koel to 6.0.5
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.0.5)

[1.2.4]
* Update Koel to 6.0.6
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.0.6)
* fix: media cache was not cleared upon new uploads, rendering the mobile app hanging.

[1.3.0]
* Update Koel to 6.1.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.1.0)
* feat: support playlist folders & improve drag-n-drop
* feat: implement drop zone for uploading
* fix: FLAC songs with special chars in name won't transcode (#1481)
* fix: cannot mark users as admin (#1483)
* fix: shuffle all button disappeared on phone (#1488)

[1.3.1]
* Update Koel to 6.2.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.2.0)
* feat: read LRC files if applicable (closes #1447) by @phanan in https://github.com/koel/koel/pull/1502
* feat: allow deleting songs from filesystem (closes #1478) by @phanan in https://github.com/koel/koel/pull/1504
* feat: support genre and year (closes #1503) by @phanan in https://github.com/koel/koel/pull/1509. See Migration for more details.
* fix: properly sort album/artist songs (closes #1486) 25c9da4c
* fix: screen not activated on app load 4eab978b
* fix: add support for vorbis tags/comments by @jojoxd 4c7e2644a3551fc7e37d0ef544991c06066bf782

[1.3.2]
* Update Koel to 6.2.1
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.2.1)
* Typofixes in api.yaml descriptions by @nexxai in https://github.com/koel/koel/pull/1513
* chore: improve assertEquals by @peter279k in https://github.com/koel/koel/pull/1512
* fix: do not lazy-load GlobalEventListeners by @phanan in https://github.com/koel/koel/pull/1515
* chore: add port 8000 into .env's APP_URL by @phanan in https://github.com/koel/koel/pull/1516
* fix: album tracklist item test by @phanan in https://github.com/koel/koel/pull/1517

[1.4.0]
* Update Koel to 6.2.2
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.2.2)
* feat: Add env TRANSCODE_FLAC (default true) to toggle transcoding on/off for FLAC files by @MaciejGorczyca in #1458
* feat: revamp the router and routing logic by @phanan in #1519
* fix: route redirection not fully working by @phanan in #1520
* feat: cache routes and deprecate hashbang support by @phanan in #1521
* fix: actual HTTP requests in tests by @phanan in #1522
* fix: dropzone stays after dropping by @phanan in #1523

[1.5.0]
* Update Koel to 6.3.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.3.0)
* fix(compilation): some bugs with album artists by @phanan in #1526
* feat(design): greatly revamp the layout by @phanan in #1529
* fix: removed extra space between links by @Archetipo95 in #1528
* feat: tabs for Artist/Album screens by @phanan in #1532

[1.5.1]
* Update Koel to 6.4.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.4.0)
* feat: add Genres screens by @phanan in https://github.com/koel/koel/pull/1541
* fix: footer height issue on mobile Safari 4d079c6799f27a4404a71fc69a120eda98b01804

[1.5.2]
* Update Koel to 6.4.1
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.4.1)
* fix: prevent real requests in unit tests by @phanan in https://github.com/koel/koel/pull/1542
* fix: 500 error on Home screen by @tomdoo in https://github.com/koel/koel/pull/1538
* feat(build): add no-dev option by @JBlond in https://github.com/koel/koel/pull/1543
* fix: intermittent initialization on Home screen by @phanan 98a6d9b4c47ccd7fb2049499e7b4225d61feed5d

[1.5.3]
* Update Koel to 6.4.2
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.4.2)
* feat(build): add unit tests with PostgreSQL for CI by @phanan in https://github.com/koel/koel/pull/1544
* chore: slotify album/artist cards by @phanan in https://github.com/koel/koel/pull/1545
* fix(search): broken redirection on mobile by @phanan in https://github.com/koel/koel/pull/1548

[1.5.4]
* Update Koel to 6.4.3
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.4.3)
* fix: special characters in genre names by @phanan in https://github.com/koel/koel/pull/1549
* feat: more actions for song context menu by @phanan in https://github.com/koel/koel/pull/1550

[1.6.0]
* Update Koel to 6.5.1
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.5.1)
* feat: persist lyrics zoom level by @phanan in https://github.com/koel/koel/pull/1556
* feat: add new version notification to About icon by @phanan in https://github.com/koel/koel/pull/1557
* feat: add sponsor list to About modal by @phanan in https://github.com/koel/koel/pull/1558

[1.6.1]
* Update Koel to 6.5.2
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.5.2)
* chore: make GlobalEventListener renderless by @phanan in https://github.com/koel/koel/pull/1560
* feat: notify when app comes offline by @phanan in https://github.com/koel/koel/pull/1561
* fix: broken layout on mobile due to tooltips (closes #1559) by @phanan in https://github.com/koel/koel/pull/1562

[1.6.2]
* Update Koel to 6.5.3
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.5.3)
* feat: use Dialog element for modals by @phanan in https://github.com/koel/koel/pull/1563
* feat: use human-readable format e.g. "5 hr 4 min" for song list durations by @phanan in https://github.com/koel/koel/pull/1564
* fix: volume increased when visualizer is activated by @phanan in https://github.com/koel/koel/pull/1567

[1.7.0]
* Update Koel to 6.6.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.6.0)
* feat: lazy load album/artist images by @phanan in #1568
* chore: improve playback and related services by @phanan in #1570
* feat: equalizer overhaul by @phanan in #1573

[1.8.0]
* Update Koel to 6.7.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.7.0)
* feat: use webp by default, falling back to jpeg by @phanan in #1574
* feat: visualizer overhaul by @phanan in #1575

[1.8.1]
* Update Koel to 6.7.1
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.7.1)
* feat: add Asteroid visualizer by @phanan in #1577
* feat: add and use "last played" timestamp for songs and fix some smart playlist bugs by @phanan in #1578
* feat: allow refreshing playlists by @phanan in #1579

[1.8.2]
* Update Koel to 6.7.2
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.7.2)
* feat: group title and artist into one column by @phanan in #1583
* feat: use Floating UI for "Add To" menu by @phanan in #1584

[1.8.3]
* Update Koel to 6.7.3
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.7.3)
* fix: carriage returns not rendered as new lines by @phanan in https://github.com/koel/koel/pull/1585
* feat: make event bus (emitter) type-safe by @phanan in https://github.com/koel/koel/pull/1591
* feat: use a composition token by @phanan in https://github.com/koel/koel/pull/1592

[1.8.4]
* Update Koel to 6.7.5
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.7.5)
* fix: bugs with sorting and dragging songs by @phanan in https://github.com/koel/koel/pull/1593

[1.8.5]
* Update Koel to 6.8.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.8.0)
* feat: use dialog element for overlay component by @phanan in https://github.com/koel/koel/pull/1594
* feat: use composables for DialogBox, MessageToast, and Router by @phanan in https://github.com/koel/koel/pull/1595
* feat: turn overlay functionalities into composable by @phanan in https://github.com/koel/koel/pull/1597
* feat: use overlay instead of soundbars for form submission by @phanan in https://github.com/koel/koel/pull/1598
* feat: persist active extra panel's tab by @phanan in https://github.com/koel/koel/pull/1599
* feat: allow specifying folder when create/edit playlists by @phanan in https://github.com/koel/koel/pull/1603
* fix: file path inconsistency on Windows (closes #1507) by @phanan in https://github.com/koel/koel/pull/1605

[1.8.6]
* Update Koel to 6.8.1
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.8.1)
* chore(test): improve client unit tests with user-event and screen by @phanan in https://github.com/koel/koel/pull/1606
* fix: update multiple songs duplicate values by @phanan in https://github.com/koel/koel/pull/1607

[1.8.7]
* Update Koel to 6.8.4
* Update Cloudron base image to 4.0.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.8.4)
* fix: explicit group by columns by @phanan in #1610
* chore: code style and some minor fixes by @phanan in 4b8ae1a
* feat: change the icons for Playlist sidebar items by @phanan in e3c7d51
* feat: update database config and .env.example by @phanan in 6e86081
* fix: setting MySQL strict mode to true breaks migration by @phanan in https://github.com/koel/koel/pull/1615

[1.8.8]
* Update Koel to 6.8.5
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.8.5)
* feat(build): add CI for MySQL by @phanan in https://github.com/koel/koel/pull/1614
* feat(test): add SmartPlaylistService tests by @phanan in https://github.com/koel/koel/pull/1616
* feat: better support for creating playlists directly from songs by @phanan in https://github.com/koel/koel/pull/1617
* feat: add fade effect to overflown lists by @phanan in https://github.com/koel/koel/pull/1618
* fix: album/artist song lists are not sortable by @phanan in https://github.com/koel/koel/pull/1619

[1.9.0]
* Update Koel to 6.9.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.9.0)
* feat: only show YouTube sidebar item on demand by @phanan in https://github.com/koel/koel/pull/1621
* feat: allow playing/shuffling playlist from the context menu by @phanan in https://github.com/koel/koel/pull/1623
* feat: allow dragging and dropping playlist folders to queue by @phanan in https://github.com/koel/koel/pull/1624
* fix: only set initialized to true if artist/album list load is successful by @phanan in https://github.com/koel/koel/pull/1629
* fix: direct streaming with PHP not working for Safari by @phanan in https://github.com/koel/koel/pull/1630
* feat: allow sorting by date added by @phanan in https://github.com/koel/koel/pull/1631
* fix: Added CreatesApplication strict typing by @JanMikes in https://github.com/koel/koel/pull/1626
* chore: remove Exoscale as a sponsor by @phanan in https://github.com/koel/koel/pull/1632

[1.10.0]
* Update Koel to 6.10.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.10.0)
* feat: use feather as the lyrics icon by @phanan in https://github.com/koel/koel/pull/1633
* fix: bottom- and top-fade out problem on Artist/Album screen by @phanan in https://github.com/koel/koel/pull/1634
* feat: allow filtering (applicable) song lists by @phanan in https://github.com/koel/koel/pull/1635
* feat: skip/stop if current song is removed from queue by @phanan in https://github.com/koel/koel/pull/1636
* fix: "play selected" not working on All Songs screen by @phanan in 182033b5ec9c5a6fd4f4304731590ca2e8020f1f

[1.11.0]
* Update Koel to 6.11.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.11.0)
* feat: add fullscreen mode by @phanan in https://github.com/koel/koel/pull/1637
* fix: cursor blocking ghost text content during dragging by @phanan in c24cc1c3ed096312d95b3c30cf58effbbd6522b2
* fix: menu diagonal problem by @phanan in 3a9f6989e92c247b7181c8887ddec3c9bbdfd8c2

[1.11.1]
* Update Koel to 6.11.1
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.11.1)
* chore(deps): update dependencies by @rene-bos in #1659
* feat: increase `send_timeout` in nginx config by @davidschlachter in #1660
* feat: use UUID for smart playlist rules + test fixes by @phanan in 8174867
* feat: add sensitive default upload settings by @phanan in 109f6a4

[1.11.2]
* Update Koel to 6.11.2
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.11.2)
* chore: use UUID for message toaster by @phanan in e9fdc02
* fix: prevent greetings with "undefined" name by @phanan in 922bb04
* chore: update nesbot/carbon to fix #1648 by @phanan in 3cdbeb8

[1.11.3]
* Symlink public/img to make covers and art writable

[1.12.0]
* Update base image to 4.2.0

[1.12.1]
* Update Koel to 6.11.3
* * [Full changelog](https://github.com/koel/koel/releases/tag/v6.11.3)
* feat: use dark color scheme by @SketchNI in #1665
* fix: null currentUser on avatar (closes #1679) by @falahatiali in #1682
* Fix the track ordering on multi disc albums by @bibo38 in #1683
* chore: merge v6 into base API by @phanan in #1685
* fix(frontend): Fix the base URL supplied to the frontend by @kondratovbr in #1706
* feat: log sync errors by @phanan in 1518196

[1.12.2]
* Update Koel to 6.11.4
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.11.4)
* fix: buggy Spotify integration by @phanan in #1731

[1.12.3]
* Update Koel to 6.11.5
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.11.5)
* fix: key constraint prevents migration (closes #1725) by @phanan in b12b6e03b490e232e0e1781b12a509f31dc174bd
* fix: make Spotify integration opt-in during tests by @phanan in 033c23492821b9587dc545a815a4805bba56e1b2

[1.13.0]
* Update Koel to 6.12.0
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.12.0)
* feat: show a message for empty Artists/Albums/Genres screens by @phanan in #1734
* feat: persist queue and playback state (closes #1675) by @phanan in #1735
* chore: increase request throttle max attempt value by @phanan in 03a767f

[1.13.1]
* Update Koel to 6.12.1
* [Full changelog](https://github.com/koel/koel/releases/tag/v6.12.1)
* fixed: broken profile updating by @phanan in 991e548da5a5bb1bbbd735a52d603233c8749806
* fixed: exclude non-played songs from recently/most played list by @phanan in 7f929f5ad60b472c01cd66ee3681ae4c390c02e9

