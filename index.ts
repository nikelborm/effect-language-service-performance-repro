import { Effect, Layer, Logger, pipe } from 'effect';
import { OctokitLayer, OctokitLayerLive } from 'effect-octokit-layer';

const AppLayer = Layer.mergeAll(OctokitLayerLive, Logger.pretty);

await pipe(
  Effect.gen(function* () {
    const result = yield* OctokitLayer.repo({
      owner: 'nikelborm',
      repo: 'fetch-github-folder',
    })
      .issues('open')
      .pipe(Effect.orDie);
  }),
  Effect.provide(AppLayer),
  Effect.runPromise
);
